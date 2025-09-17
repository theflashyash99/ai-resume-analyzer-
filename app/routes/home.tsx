import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url(./images/bg-main.svg)] bg-cover">
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Rating</h1>
        <h2>Review your submissions and check AI-powered</h2>

      </div>

    </section>


  </main>
}
