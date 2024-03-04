import "@/css/component.css";
import "@/css/reset.css";
import "@/css/utility.css";
import "@/css/markdown.css"
import Header from "@/components/header/Header"
import Sidebar from "@/components/sidebar/Sidebar";

// export const metadata = {
//   title: "test meta",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html>
      <body data-theme="light" suppressHydrationWarning={true}>
        <div id="total-wrapper">
          <Header />
          <main>
            <div className="main-inner">
              <div className="align-items-stretch flex-box gap-20 max-grid ml-auto mr-auto">  
                <Sidebar/>
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
