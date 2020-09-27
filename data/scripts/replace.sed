#!/bin/bash

begin="""
end="""

replacement="data"

sed -r '/\b'"$begin"'\b/{
    :a;/\b'"$end"'\b/!{
        N;ba
    }
    s/(\b'"$begin"')\b.*\b('"$end"'\b)/\1'"$replacement"'\2/
}' input.file