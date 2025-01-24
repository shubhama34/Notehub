"use client"
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
const PdfViewer = ({url}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({ });
        const toolbarPluginInstance = toolbarPlugin();
        const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

        const transform = (slot) => ({
          ...slot,
          Download: () => < ></>,
          DownloadMenuItem: () => <></>,
          EnterFullScreen: () => <></>,
          EnterFullScreenMenuItem: () => <></>,
          SwitchTheme: () => <></>,
          SwitchThemeMenuItem: () => <></>,
          Open:()=><></>,
          Print:()=><></>

        });
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="h-[80vh] w-[50vw] ">
           <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '0.25rem',
                }}
            >
                <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            ></div>
          <Viewer fileUrl={url} plugins={[toolbarPluginInstance]} />
        </div>
      </Worker>
      <style jsx>{`
        .rpv-core_minimal-button:nth-child(2), /* Open button */
                .rpv-core_minimal-button:nth-child(3)  /* Download button */ {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default PdfViewer;
