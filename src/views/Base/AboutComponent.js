import React from 'react';

class AboutComponent extends React.Component {

    state = { //state phải đặt ngoài render()
        'age': '18'
    }
    handleOnchangeName = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        let name = 'Doan Quang Cuong';

        return (
            <>
                <div className='text-center'>
                    <div>Hello World! {name}</div>
                    <div>
                        <input value={this.state.age} type="text"
                            onChange={(event) => this.handleOnchangeName(event)}
                        />
                    </div>
                    My age: {this.state.age}
                </div>
            </>
        )
    }
}

export default AboutComponent;