---
title: Bromite Custom Ad Block filters
description: Support for custom subresource filters in Bromite
timezone: Europe/Berlin
logo: /bromite.png
image: /bromite.png
---
# Ad block filters

Since [release 78.0.3904.130](https://github.com/bromite/bromite/releases/tag/78.0.3904.130) it is possible to use custom ad block filters.

Change the default filters URL from Settings -> AdBlock settings and specify a valid URL for the filters file.

The default URL is: [https://www.bromite.org/filters/filters.dat](https://www.bromite.org/filters/filters.dat)

# How to create a custom filters file

See [Chromium documentation](https://github.com/chromium/chromium/blob/master/components/subresource_filter/FILTER_LIST_GENERATION.md).

You will need to use the `ruleset_converter` command-line tool as in:
```
ruleset_converter --input_format=filter-list \
		--output_format=unindexed-ruleset \
                --input_files=easyprivacy.txt,easylist.txt \
		--output_file=filters.dat
```

A pre-built `ruleset_converter` binary for Linux/amd64 (but not updated regularly) is available [here](https://github.com/bromite/filters/releases/).

# Requirements

The webserver serving the file must provide a consistent `Last-Modified` header.

# Automatic filters updates

The filters URL will be automatically checked 5 seconds after the browser is started and then once per week.

{% include donate.html %}

# Limitations

You will need to close and re-open Bromite in order for the new URL to be in effect.
