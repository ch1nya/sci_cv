import os
import base64

# The content in base64 to avoid encoding issues
content_b64 = "UEsHBgAAAAIAAAAIAAAAqGJyICogKCJEZXZpY2Ugd29ya3JhdG9yeSjCoJ/CrXQ2CiIzCiRiGAo1CiRCCgQ2CiS9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiCCDwNhYgAAAACoAAAAnC4qCi8qIDogIlRFUkVuY29kZTogUFJKWSDIoJ/CqA==" 
# Just a placeholder - we need the full content

# Write a simple script to create the file
script = """
import base64
import sys

content_b64 = sys.argv[1]
content = base64.b64decode(content_b64).decode('utf-8')

with open('src/content.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('content.ts written successfully')
"""

# Read the actual content that needs to be written
# This file is long, so we'll write it using a different approach

print("Setup complete, now writing content.ts")
