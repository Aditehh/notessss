import AuthButton from "@/components/ui/auth-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {

  return (
    <main>

      This is the main part of the notes app
      <Button>
        I agree
      </Button>

      <AuthButton />
    </main>
  );
}
