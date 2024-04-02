function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✓'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sully</h1>
      <ul>
        <Item
          name="Traje espacial"
          isPacked={true}
        />
        <Item
          name="Casco con una hoja dorada"
          isPacked={true}
        />
        <Item
          name="Foto de Tam"
          isPacked={false}
        />
      </ul>
    </section>
  );
}
