import { Navbar } from "@/components/modules/navbar";

function TestPage() {
  return (
    <>
      <Navbar
        module={{ items: [{ title: "Home", url: "/", _type: "navLink" }] }}
      />
    </>
  );
}

export default TestPage;
