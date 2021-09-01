import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { IRootState } from "store/reducers";
import { changeTheme } from "store/actions/theme"
import { ChangeThemePayload } from "store/actions/payload-types";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Card } from "@material-ui/core";
import ProjectCard from "components/Card/ProjectCard";
// img
import pteLanding from "assets/img/pte-magic-landing.png"
import nauvusLanding from "assets/img/nauvus-landing.png"
import bidmaxLanding from "assets/img/bidmax-landing.png"
import moniPteLanding from "assets/img/moni-pte-landing.png"
import pteUiLanding from "assets/img/pte-ui-landing.png"
import mstcLanding from "assets/img/mstc-landing.png"
// @material-ui/icons

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: "100%",
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 20
  },
  rowWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    columnGap: 15,
    justifyContent: "space-between",
    marginBottom: 25
  },
  rowWrapper_2: {
    display: "flex",
    flexDirection: "row",
    width: "calc(66% - 15px)",
    columnGap: 15,
    justifyContent: "space-between",
    marginBottom: 25
  },

}))


interface IState {
  theme: string;
  color: string;
}

interface IDispatch {
  changeTheme: (theme: ChangeThemePayload) => {}
}


interface ProjectProps {
  children: React.ReactNode
}

type Props = ProjectProps & IState & IDispatch

const Projects: React.FC<Props> = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <div className={classes.root}>
      {/* Commercial projects */}
      <h3 style={{ marginTop: 0 }}>
        Commercial Projects
      </h3>
      {
        matches === true
          ? <>
            <ProjectCard
              name="PTE Magic"
              description="An E-learning platform focus on PTE test preparation"
              imageSrc={pteLanding}
              link="/pte-magic"
              githubUrl="/github/pte-magic"
            />
            <ProjectCard
              name="Max2Bid"
              description="Bidding platform for construction machines"
              imageSrc={bidmaxLanding}
              link="/bidmax"
              githubUrl="/github/bidmax"
            />
            <ProjectCard
              name="Nauvus"
              description="An IoT start up similar to Samsara"
              imageSrc={nauvusLanding}
              link="/nauvus"
              githubUrl="/github/nauvus"
            />

            <ProjectCard
              name="PTE Magic"
              description="Video-based learning platform"
              imageSrc={moniPteLanding}
              link="/moni-pte"
              githubUrl="/github/moni-pte"
            />
            <ProjectCard
              name="PTE UI"
              description="npm package for UI components of questions in PTE test"
              imageSrc={pteUiLanding}
              link="/pte-ui"
              githubUrl="/github/pte-ui"
            />
            <ProjectCard
              name="BENIT Academy"
              description="E-learning platform like Udacity"
              imageSrc={pteLanding}
              link="/nauvus"
              githubUrl="/github/nauvus"
            />
          </>
          : <>
            <div className={classes.rowWrapper}>
              <ProjectCard
                name="PTE Magic"
                description="An E-learning platform focus on PTE test preparation"
                imageSrc={pteLanding}
                link="/pte-magic"
                githubUrl="/github/pte-magic"
              />
              <ProjectCard
                name="Max2Bid"
                description="Bidding platform for construction machines"
                imageSrc={bidmaxLanding}
                link="/bidmax"
                githubUrl="/github/bidmax"
              />
              <ProjectCard
                name="Nauvus"
                description="An IoT start up similar to Samsara"
                imageSrc={nauvusLanding}
                link="/nauvus"
                githubUrl="/github/nauvus"
              />
            </div>
            <div className={classes.rowWrapper}>
              <ProjectCard
                name="PTE Magic"
                description="Video-based learning platform"
                imageSrc={moniPteLanding}
                link="/moni-pte"
                githubUrl="/github/moni-pte"
              />
              <ProjectCard
                name="PTE UI"
                description="npm package for UI components of questions in PTE test"
                imageSrc={pteUiLanding}
                link="/pte-ui"
                githubUrl="/github/pte-ui"
              />
              <ProjectCard
                name="BENIT Academy"
                description="E-learning platform like Udacity"
                imageSrc={pteLanding}
                link="/nauvus"
                githubUrl="/github/nauvus"
              />
            </div>
          </>
      }

      {/* Personal projects */}
      <h3>Personal Projects</h3>
      <>
        <div className={classes.rowWrapper_2}>
          <ProjectCard
            name="MSTC VN"
            description="A company profile website for a friend"
            imageSrc={mstcLanding}
            link="mstc-vn"
            githubUrl="/github/mstc"
          />
          <ProjectCard
            name="Message web app"
            description="A message platform"
            imageSrc={bidmaxLanding}
            link="/bidmax"
            githubUrl="/github/bidmax"
          />
        </div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);