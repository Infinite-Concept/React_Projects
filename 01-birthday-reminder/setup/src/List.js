import React from 'react'

function List({people}) {
  return (
    <div>
        {
          people.map((items) => {
            const{id, name, age, image} = items
            return(
              <article key={id} className='person'>
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <p>{age}</p>
                </div>

              </article>
            )
          })
        }
    </div>
  )
}

export default List