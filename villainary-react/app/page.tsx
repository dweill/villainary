import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center p-24">
      <div className="relative flex flex-col place-items-center">
        <h1 className="text-9xl mb-12">Villainary</h1>
        <Button className="block mt-12" variant="contained">
          Become a Villain
        </Button>
      </div>
    </main>
  );
}
