import React, { Component } from 'react';


class ComponenteTonto extends Component
{
    render()
    {
        return(<span>{this.props.nombre_padre}</span>)
    }
}

export default ComponenteTonto