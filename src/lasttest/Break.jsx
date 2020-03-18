import React from 'react'
import PropTypes from 'prop-types'

export const Break = props => {
     return (
          <div>
          <h2>{props.nome}</h2>
          <h2>{props.idade}</h2>
          {
               props.yes ? <h2>Hello there</h2> : <h2>You're Dead</h2>
          }
     </div>
     )
}

Break.propTypes = {
     nome: PropTypes.string,
     idade: PropTypes.number,
     yes: PropTypes.bool,
}
