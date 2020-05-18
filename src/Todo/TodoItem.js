import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

 function TodoItem({ todo, index, change }) {
     console.log(todo)
    return (
    <li style={styles.li}>
        <span>
            <input type='checkbox' style={styles.input} onChange={() => {change(todo.id)}} />
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>

        <button className='rm'>&times;</button>
    </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    change: PropTypes.func.isRequired
}

export default TodoItem