import React, { Component } from "react";
import { JobModel } from "../../../../models/job.model";
import { connect } from "react-redux";
import { fetchData } from "../../../../store/actions/dataAction";

interface Props {
  data: JobModel[]; // Define your data model here
  loading: boolean;
  error: string | null;
  fetchData: () => void;
}

export class Home extends Component<Props> {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { data, loading, error } = this.props;
    return <div>Home</div>;
  }
}

const mapStateToProps = (state: any) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error,
  // fetchData: fetchData
});

export default connect(mapStateToProps, { fetchData })(Home);
