# Overview

The PdfViewer component for Qodly Studio is designed to display PDF files within the application interface. It allows users to view the contents of PDF files directly within the Qodly Studio environment without the need for external PDF viewing software.

## PdfViewer

An efficient PDF viewer component with customizable features
![pdfViewer](public/pdfViewer.png)

### Datasource

| Name       | Type           | Required | Description                                                                                                                      |
| ---------- | -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Datasource | blob or string | Yes      | the component accepts a file path as part of its datasource. This datasource can take the form of a blob file's content or a URL |
| Server ref | string         | No       | The c omponent includes a reference that users can utilize for executing server-side actions related to it.                      |
