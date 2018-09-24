import React from 'react';
import * as html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import './style.css';

export default class Home extends React.Component {

    constructor(){
        super();
        this.myRef = React.createRef();
        this.state = {
            name: 'radhey'
        };
    }

    htmlToPdf() {
        const element = this.refs.pdfContent;

        html2canvas(element).then(canvas => {           
            const imgWidth = 200;
            const imgHeight = canvas.height * imgWidth / canvas.width;

            // Default export is a4 paper, portrait, using milimeters for units
            const pdf = new jspdf('p', 'mm', 'a4', 'letter'); // A4 size page of PDF
        
            const contentDataURL = canvas.toDataURL('image/png'); 
            pdf.addImage(contentDataURL, 'PNG', 5, 5, imgWidth, imgHeight);

            // Add text to pdf 
            // doc.text('Hello world!', 1, 1);

            


            pdf.save(Date.now()+'.pdf');
        })
    }

    render() {

        return (
            /** Common Page wraper **/
            <div className="container" id="pdfContent" ref="pdfContent">
            <button onClick={this.htmlToPdf.bind(this)} className="btn" >Generate PDF</button>
                <div className="topText">
                    <span>Hi, Sir</span><br />
                    <span>This is my first example for pdf,</span> <br />
                    <span>Check my pdf to find something new,</span><br />
                </div>
                <div className="letterBody">
                <br />
                   <p>
                       <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Lorem ipsum dolor sit amet, verterem sapientem liberavisse id cum, 
                            ex vis fierent dolores, vix tation salutandi cu. Pri in corpora offendit, 
                            at docendi laboramus vel. Pro et ullum iudico, at veritus dolores conceptam usu, 
                            eam ei alterum consequat. 
                            Ex dicat aliquid graecis has. Ne mea idque assueverit dissentiet, 
                            mel insolens gloriatur omittantur eu.
                       </span>
                    </p>
                    <p>
                       <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Lorem ipsum dolor sit amet, verterem sapientem liberavisse id cum, 
                            ex vis fierent dolores, vix tation salutandi cu. Pri in corpora offendit, 
                            at docendi laboramus vel. Pro et ullum iudico, at veritus dolores conceptam usu, 
                            eam ei alterum consequat. 
                            Ex dicat aliquid graecis has. Ne mea idque assueverit dissentiet, 
                            mel insolens gloriatur omittantur eu. Pro et ullum iudico, at veritus dolores conceptam usu, 
                            eam ei alterum consequat.
                       </span>
                    </p>
                    <p>
                       <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Lorem ipsum dolor sit amet, verterem sapientem liberavisse id cum, 
                            ex vis fierent dolores, vix tation salutandi cu. Pri in corpora offendit, 
                            at docendi laboramus vel. Pro et ullum iudico, at veritus dolores conceptam usu, 
                            eam ei alterum consequat. 
                            Ex dicat aliquid graecis has. Ne mea idque assueverit dissentiet, 
                            mel insolens gloriatur omittantur eu.
                       </span>
                    </p>
                    <p>
                       <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Lorem ipsum dolor sit amet, verterem sapientem liberavisse id cum, 
                            ex vis fierent dolores, vix tation salutandi cu. Pri in corpora offendit, 
                            at docendi laboramus vel. Pro et ullum iudico, at veritus dolores conceptam usu, 
                            eam ei alterum consequat. 
                            Ex dicat aliquid graecis has. Ne mea idque assueverit dissentiet, 
                            mel insolens gloriatur omittantur eu.Pro et ullum iudico, at veritus dolores conceptam usu, 
                            eam ei alterum consequat.
                       </span>
                    </p>
                    <p>
                       <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Lorem ipsum dolor sit amet, verterem sapientem liberavisse id cum, 
                            ex vis fierent dolores, vix tation salutandi cu. Pri in corpora offendit, 
                            at docendi laboramus vel. Pro et ullum iudico, at veritus dolores conceptam usu, 
                            eam ei alterum consequat. 
                            Ex dicat aliquid graecis has. Ne mea idque assueverit dissentiet, Ex dicat aliquid graecis has. Ne mea idque assueverit dissentiet, 
                            mel eu.
                       </span>
                    </p>
                    <p>
                       <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Ex dicat aliquid graecis has. Ne mea idque assueverit dissentiet, Ex dicat aliquid graecis has. Ne mea idque assueverit dissentiet, 
                            mel insolens gloriatur omittantur eu.
                       </span>
                    </p>
                </div>
                <div>
                    <div className="">
                        <span>Contact Us: 0000000000</span><br />
                        <span>Email: ******@gmail.com</span><br />
                        <span>Thank you</span>
                    </div>
                </div>
       </div>

        ); 
    }
}