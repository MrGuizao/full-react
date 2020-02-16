import React from 'react';

export default function ApiItems({ item }) {
     return (
          <ul className="blocks">
               {
                    item.map(i => <li key={i.id}>{i.title}</li>)
               }
          </ul>
     )
}
