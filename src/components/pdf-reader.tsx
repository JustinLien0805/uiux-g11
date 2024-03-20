import textscript from "../assets/textscript.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import { Button } from "./ui/button";
import { PlusCircleIcon, MinusCircleIcon } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export const PDFViewer = () => {
  const [numPages, setNumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const changePage = (offset: number) => {
    if (currentPage + offset > 0 && currentPage + offset <= numPages) {
      setCurrentPage(currentPage + offset);
    }
  };
  return (
    <div className="mt-6 flex max-w-md flex-col items-center gap-4 self-center">
      <Document
        file={textscript}
        onLoadSuccess={(e: any) => setNumPages(e.numPages)}
      >
        <Page pageNumber={currentPage} width={448} />
      </Document>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="hover:bg-transparent hover:text-white"
          onClick={() => changePage(-1)}
        >
          <MinusCircleIcon className="h-6 w-6" />
        </Button>
        <p>
          Page {currentPage} of {numPages}
        </p>
        <Button
          variant="ghost"
          className="hover:bg-transparent hover:text-white"
          onClick={() => changePage(1)}
        >
          <PlusCircleIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
