### Node JS with TypeScript

#### Pre-Requisite
- Install Node version >= 8 
     - [Install Nodejs](https://nodejs.org/en/)
- Install Typescript on your system
     -  `npm install -g typescript`
#### Steps
In the root directory of this code, use the following commands:
`npm install` - _it will install your project dependencies_
`npm start` - _it will start front-end with your browser (chrome).
`npm run build` - _it will create a customise build for deploying your code on server._
_***Note:*** Your front-end will run on `PORT 3000` by default, if your `PORT 3000` is already in use then it will ask to run other port, you just need to type Y or Yes to proceed_


Default ports:

    - '3000'

#### How to set Envrionment Variable (If you want to set):

**_Steps to set Custom NODE_ENV (`development/production`):_**
Set environment variable `NODE_ENV` for dev of prod.
Just use `export NODE_ENV=dev`. To verify varialbe is set of not, just run the command: `echo ${NODE_ENV}`.

#### Setup html2canvas and jspdf

    - 'npm install @types/html2canvas --save'
    - `npm install jspdf --save`
    - React-Code: 
        const element = this.refs.pdfContent;
        html2canvas(element).then(canvas => {           
            const imgWidth = 200;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const pdf = new jspdf('p', 'mm', 'a4', 'letter'); // A4 size page of PDF
        
            const contentDataURL = canvas.toDataURL('image/png'); 
            pdf.addImage(contentDataURL, 'PNG', 5, 5, imgWidth, imgHeight);
            pdf.save(Date.now()+'.pdf');
        });
    - JSX-HTML: 
        -  <div className="container" id="pdfContent" ref="pdfContent">Hellow world.</div>

**This is all we need to deploy this demo `react-html-to-pdf` application.**
_If anyone wants any further instruction can contact me through email._
**_Thank you_**