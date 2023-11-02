import NavLocal from "@/app/Components/NavLocal";

export default function layout({ children }) {
  return <div className="min-h-screen h-fit">
    <NavLocal/>
    {children}
  </div>;
}
