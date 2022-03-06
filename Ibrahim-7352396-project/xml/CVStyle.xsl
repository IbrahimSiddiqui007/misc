<?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
        <xsl:template match="/">
            <html>
                <head></head>
                <body>
                    <h2>My CD Collection</h2>
                    <table border="1">
                            <tr bgcolor="#9acd32">
                                <th style="color: red">Title</th>
                                <th style="color: red">Artist</th>
                                <th style="color: red">Artist</th>
                            </tr>
                        <xsl:for-each select="CV/personal">
                            <tr>
                                <td><xsl:value-of select="Name" /></td>
                                <td><xsl:value-of select="Email" /></td>
                                <td><xsl:value-of select="about" /></td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </body>
            </html>
        </xsl:template>
    </xsl:stylesheet>