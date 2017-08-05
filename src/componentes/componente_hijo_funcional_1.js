import React from 'react'


class Funcional1 extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {nombres:['Pepito','Pepe','Pepin'] }
		//this.cambiar_estado = this.cambiar_estado.bind(this)
	}

	cambiar_estado(bbb)
	{
		console.log(bbb)
		this.setState({nombres : ['Nombre 1','Nombre 2','Nombre 3']})
	}


	render()
	{
		return( 
		<div> 
			<br />
			<a>COMPONENTE FUNCIONAL 1</a>
			<br />
			
			<ol id="lista2">
			<ul> 
				{this.state.nombres.map((name) =>
					<li key={name}> {name}</li>
			)}
			</ul>
			</ol>
		</div> 
	)}

}
export default Funcional1
