import React from 'react'
import {connect} from 'react-redux'
import {getDetail} from '../actions/orders'
import UpdateView from './updateView'


class Update extends React.Component {



    async componentDidMount() {
        const {id} = this.props.match.params;
        await this.props.getDetail(id);
    }



    render(){
        const {detail, loading} = this.props
        if(loading) {
            return <h1>ГРУЗИМ</h1>
        }

        const body = detail ? <UpdateView data={detail}/> : ""

        return(
            <div>
                {body}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    detail: state.detail.detail_order,
    loading: state.detail.loading,
})




export default connect(mapStateToProps, {getDetail})(Update);
