import { cloneElement, ReactElement, useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface GeneratePdfProps {
  trigger: ReactElement;
  pdf: ReactElement;
}

const GeneratePdf = ({ trigger, pdf }: GeneratePdfProps) => {
  const ref = useRef<any>(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Alejandro Gonzalez Alonso - Resume",
    content: () => ref.current,
  });

  return (
    <>
      {cloneElement(trigger, { onClick: handlePrint })}
      <div style={{ display: "none" }}>
        <div ref={ref}>{pdf}</div>
      </div>
    </>
  );
};

export default GeneratePdf;
