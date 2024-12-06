#!/usr/bin/env bash

rm -rf www.designsystem.qld.gov.au
#cp -rf ../www.designsystem.qld.gov.au .
wget --recursive --convert-links --level=inf --mirror -e robots=off --random-wait --no-clobber --no-remove-listing --page-requisites --adjust-extension https://www.designsystem.qld.gov.au/ --user-agent "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
wget --recursive --convert-links --level=inf --mirror -e robots=off --random-wait --no-clobber --no-remove-listing --page-requisites --adjust-extension https://www.designsystem.qld.gov.au/index.html_index.html_a=110276 --user-agent "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
mkdir -p ./www.designsystem.qld.gov.au/__data/assets/file/0020/71516/
wget https://qhonline.com.au/__data/assets/file/0020/71516/header-logo-qgov-light.svg ./www.designsystem.qld.gov.au/__data/assets/file/0020/71516/header-logo-qgov-light.svg
#cp -rf www.designsystem.qld.gov.au ../.

# Define the HTML files to be processed
find . -type f -name "*.html" | while read -r file; do
    # Remove the Hotjar tracking code from the file
    sed -i '/<!-- Hotjar Tracking Code/,/<\/script>/d' "$file"
    echo "Removed Hotjar tracking code from $file"
done

#rename invalid files
#```
find . -name "*\?*" |grep -v "html$" |grep -v "css$"
#``



find . -name "*\?*" | while read -r file; do
    # Replace '?' with '_'
    new_name=$(echo "$file" | sed 's/?/_/g')

    # Sniff content type and add extension
    content_type=$(file --mime-type -b "$file")

    case "$content_type" in
         image/jpeg)
            new_name="$new_name.jpg"
            ;;
        image/png)
            new_name="$new_name.png"
            ;;
        text/css)
            new_name="$new_name.css"
            ;;
        text/html)
             if  [[ "$file" == *.html ]]; then
                            new_name="$new_name"
                        else
                            new_name="$new_name.html"
            fi
            ;;
        text/plain)
            if [[ "$file" == *.css ]] || [[ "$file" == *.js ]]; then
                new_name="$new_name"
            else
                new_name="$new_name.js"
            fi

            ;;
        application/javascript|text/javascript)
            new_name="$new_name.js"
            ;;
        application/vnd.ms-fontobject)
            new_name="$new_name.eot"
            ;;
        *)
            echo "Unknown content type $content_type for $file"
            continue
            ;;
    esac

    # Rename the file
    echo "Moving $file to $new_name"
    mv "$file" "$new_name"
    oldname=$(echo $(basename "$file") | sed 's/?/%3F/g')
    newname=$(basename $new_name)
    echo "finding $oldname to replace with $newname"
    # Find all files that contain the old filename and replace it with the new filename
    find . -type f -exec grep -l "$oldname" {} \; | while read -r file; do
        # Replace the old filename with the new filename inside the file
        sed -i "s/$oldname/$newname/g" "$file"  # Corrected the closing quote for sed replacement
        echo "Updated $file"
    done
done


cd "./www.designsystem.qld.gov.au"


find . -type f -exec grep -l "https://qhonline.com.au" {} \; | while read -r file; do
        # Replace the old filename with the new filename inside the file
        sed -i "s|https://qhonline.com.au/|./|g" "$file"
        echo "Updated $file changing qhonline.com.au to index.html_a=110276.jpg"
done

find . -type f -exec grep -l "?a=110276" {} \; | while read -r file; do
        # Replace the old filename with the new filename inside the file
        sed -i "s/\?a=110276/index.html_a=110276.jpg/g" "$file"
        echo "Updated $file changing ?a=110276 to index.html_a=110276.jpg"
done

