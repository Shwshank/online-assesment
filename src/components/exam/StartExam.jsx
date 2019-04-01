import React from "react";
import { connect } from "react-redux";

class StartExam extends React.Component {

  constructor(props) {
    super(props)
    let examJSON = {
      set_id: "101",
      name: "Some name1 here",
      time: "1",
      question:[
        {
          ans: "97",
          difficulty_level: "Easy",
          marks: "1",
          option:[ "129", "64", "48",  "97", "None"],
          q_id: "16d2746b48494275944c551768ccbe62",
          question: "6 different sweet varieties of count 32, 216, 136, 88, 184, 120 were ordered for a particular occasion. They need to be packed in such a way that each box has the same variety of sweet and the number of sweets in each box is also the same. What is the minimum number of boxes required to pack?",
          section: "Quantitative"
        },
        {
          ans: "90",
          difficulty_level: "Easy",
          marks: "2",
          option:[ "120", "60", "40",  "90", "None"],
          q_id: "16d2746b48494275944c551768ccbe60",
          question: "5 different sweet varieties of count 32, 216, 136, 88, 184, 120 werer of boxes required to pack?",
          section: "Quantitative"
        }
      ]
    }

    this.state =  {examJSON: examJSON}
  }

  onSiteChanged=(i, option)=>{
    console.log(i);
    console.log(option);
  }

  renderOptions = (i, options)=>{
    let y=0;

    return options.map(option=>{
      y++;
      return (
        <div key={y}>
          &nbsp; &nbsp; {y}.
          <input type="radio" name={i}
                                   value={option}
                                   onChange={this.onSiteChanged.bind(this,i, option)} />
          {option}

        </div>
      )
    })
  }

  renderQuestion = ()=>{
    let i=0;

    return this.state.examJSON.question.map(ques=>{
      i++;
      return(
        <div key={i}>
          {i}. {ques.question}
            <br/>
            {this.renderOptions(i, ques.option)}
            <br/>
          <hr/>
        </div>
      )
    })

  }

  render() {
    return (
      <main style={{ minHeight: 500 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12" />
            {this.props.examUser.name}
            {this.renderQuestion()}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return { examUser: state.examUser };
};

export default connect(mapStateToProps)(StartExam);
