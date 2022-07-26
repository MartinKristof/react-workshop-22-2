import React, { useState } from 'react';
import { useEffect } from 'react';
import { ReactNode } from 'react';

type Items = { id: number; name: string }[];

const Table: React.FC<{ items: Items }> = ({ items }) => (
  <table>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Grid: React.FC<{ items: Items }> = ({ items }) => (
  <div className="row">
    {items.map(item => (
      <div className="col" key={item.id}>
        <span>{item.id}</span>
        <span>{item.name}</span>
      </div>
    ))}
  </div>
);

const RenderProps: React.FC<{ render: { (items: Items): ReactNode }; title: string }> = ({ render, title }) => {
  const [items, setItems] = useState<Items>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();

      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Render Props {title}</h2>
      {render(items)}
    </>
  );
};

export const ItemsTable = () => <RenderProps title="Table" render={items => <Table items={items} />} />;

export const ItemsGrid = () => <RenderProps title="Grid" render={items => <Grid items={items} />} />;
