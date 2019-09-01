import React from 'react'
import DetailView from '../components/detailView'
import {connect} from 'react-redux'
import {getDetail} from '../actions/orders'


class Detail extends React.Component {

    async componentDidMount() {
        const {id} = this.props.match.params;
        await this.props.getDetail(id);
    }

    render(){
        const {detail, loading} = this.props
        if(loading) {
            return <h1>LOADING</h1>
        }
        const body = detail ? <DetailView detail={detail} />: ""
        return (
            <div className='detail_container'>
                {body}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    detail: state.detail.detail_order,
    loading: state.detail.loading,
})


export default connect(mapStateToProps, {getDetail})(Detail);
