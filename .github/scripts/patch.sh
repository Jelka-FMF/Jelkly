#!/bin/bash

BASE_TITLE="Jelkly"
BASE_URL="https://jelkly.fmf.uni-lj.si"

# Manually copy the favicon to the root directory
cp docs/static/icons/favicon.ico built/packaged/favicon.ico

find built/packaged -name '*.html' | while read -r filename; do
    # Remove the lang attribute from HTML files as it is wrong
    sed -i 's/lang="en"\s*//g' "$filename"

    # Remove the nofollow attribute from HTML files to allow indexing
    sed -i 's/rel="nofollow noopener"\s*//g' "$filename"
done

# Properly set the title tag for the documentation
find built/packaged/docs -name '*.html' | while read -r filename; do
    # Extract the title from the h1 tag
    content=$(grep -oPm1 '<h1[^>]*>.*?</h1>' "$filename" | sed -E 's|<h1[^>]*>(.*?)</h1>|\1|')

    if [[ -n "$content" ]]; then
        # Escape special characters
        escaped=$(printf '%s\n' "$content" | sed 's/[]\/$*.^[]/\\&/g')

        # Replace the title tag
        sed -i "s/<title>Jelkly<\/title>/<title>$escaped – $BASE_TITLE<\/title>/" "$filename"

        # Replace the twitter:title meta tag
        sed -i "s/<meta name=\"twitter:title\" content=\"Jelkly\"/<meta name=\"twitter:title\" content=\"$escaped – $BASE_TITLE\"/" "$filename"

        # Replace the og:title meta tag
        sed -i "s/<meta property=\"og:title\" content=\"Jelkly\"/<meta property=\"og:title\" content=\"$escaped – $BASE_TITLE\"/" "$filename"
    fi
done

# Generate the sitemap based on the summary file
SUMMARY_FILE="built/packaged/docs/SUMMARY.html"
SITEMAP_FILE="built/packaged/sitemap.xml"

# Initialize the sitemap XML file
cat <<EOF >"$SITEMAP_FILE"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
EOF

# Extract links and process them
grep -o '<li><a[^>]*href="[^"]*"' "$SUMMARY_FILE" | while read -r line; do
    # Extract the href value from the line
    link=$(echo "$line" | sed -E 's#.*href="([^"]*)".*#\1#')

    # Check if the link is relative
    if [[ "$link" =~ ^https?:// ]]; then
        ABSOLUTE_LINK="$link"
    else
        ABSOLUTE_LINK="$BASE_URL$link"
    fi

    # Add to the sitemap
    cat <<EOF >>"$SITEMAP_FILE"
    <url><loc>$ABSOLUTE_LINK</loc></url>
EOF
done

# Close the sitemap XML file
cat <<EOF >>"$SITEMAP_FILE"
</urlset>
EOF
