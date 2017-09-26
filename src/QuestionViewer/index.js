<<<<<<< HEAD
	import Component from 'inferno-component';
=======
import { Link } from 'inferno-router';
import Component from 'inferno-component';
>>>>>>> d90c179401db689c5e7af78fd6d736f19e37dae2

class QuestionViewer extends Component {
  state = {
    question: {},
    loading: true,
    error: '',
  }
  async componentDidMount() {
    const { qno } = this.props.params;
    var res = await window.fetchWithAuth(`/questions/${qno}`);
    res = await res.json();
    if (!res.error) this.setState({ question: res, loading: false })
    else this.setState({ error: res.error, loading: false })
  }
  render() {
    const { loading, question, error } = this.state
    const qno = parseInt(this.props.params.qno,10)
    return (
      <div>
        {loading && <div>Loading...</div>}
        <h1>Q{question.qno}: {question.title}</h1>
        {error && <div className="error">ERROR: {error}</div>}
        <p>
          {question.body}
        </p>
<<<<<<< HEAD
        <input type="button" class="next" value="NEXT"/>&nbsp;<input type="button" class="prev" value="PREVIOUS"/>
=======
        {
          qno!==1 &&
            <Link className="button float-left" to={`/question/${qno-1}`}>
              Prev
            </Link>
        }
        {
          qno!==5 &&
            <Link className="button float-right" to={`/question/${qno+1}`}>
              Next
            </Link>
        }
>>>>>>> d90c179401db689c5e7af78fd6d736f19e37dae2
      </div>
       
    )
  }
}

export default QuestionViewer;
