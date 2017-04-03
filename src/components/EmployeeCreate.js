import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {

    onButtonPress(){
           const {name, phone, shift} = this.props;
           this.props.employeeCreate({ name, phone, shift: shift || 'Monday'  });
    }

    render(){




        return(
            <Card>
                <EmployeeForm  {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapToStateProps = (state) => {
    const { name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};


export default connect(mapToStateProps, {employeeUpdate, employeeCreate}) (EmployeeCreate);