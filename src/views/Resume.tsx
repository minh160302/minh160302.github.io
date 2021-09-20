import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { IRootState } from "store/reducers";
import { changeTheme } from "store/actions/theme"
import { ChangeThemePayload } from "store/actions/payload-types";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Document, Page, pdfjs } from "react-pdf";
import "assets/css/pdf.css"
// import resumeFile from "assets/pdf/Resume.pdf"
// @material-ui/icons


const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: "100%",
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 20
  },
}))



interface IState {
  theme: string;
  color: string;
}

interface IDispatch {
  changeTheme: (theme: ChangeThemePayload) => {}
}


interface ResumeProps {
  children: React.ReactNode
}

type Props = ResumeProps & IState & IDispatch

const Resume: React.FC<Props> = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  // const url = "https://drive.google.com/file/d/1_PB_94a7IrN8s4OLiycbnYCyr8tU2eoG/view?usp=sharing"
  // const url = "../assets/pdf/Resume.pdf"
  const url = "https://portfolio-cminh.s3.ap-southeast-1.amazonaws.com/Resume.pdf"

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className={classes.root}>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}

      >
        <Page pageNumber={pageNumber} />
      </Document>
      <br />
      PDF version: &nbsp;
      <a href="https://drive.google.com/file/d/1_PB_94a7IrN8s4OLiycbnYCyr8tU2eoG/view" target="_blank">Google Drive</a>,
      &nbsp;<a href="https://portfolio-cminh.s3.ap-southeast-1.amazonaws.com/Resume.pdf" target="_blank">S3</a>

      <div>
      </div>
      <div>
      </div>

    </div>
  )
}

const mapStateToProps = ({ theme }: IRootState) => ({
  theme: theme.theme,
  color: theme.color
})

const mapDispatchToProps = {
  changeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);