// Importe a página inicial usando o alias '@HomePage'
import HomePage from "/workspaces/cs220-portfolio-group-1/src/app/HomePage/page.jsx";

// Em seguida, você pode usar a página inicial onde for necessário, por exemplo, renderizando-a em um componente de página:
export default function IndexPage() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
