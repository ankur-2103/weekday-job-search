import React, { Component } from "react";
import { JobModel } from "../../models/job.model";
import { Avatar, Button, Card, CardContent, Chip } from "@mui/material";
import "./JobCard.css";
import { capitalizeWords, generateRandomNumber } from "../../lib/utils";

interface Props {
  data: JobModel;
}

export class JobCard extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <Card variant="outlined" raised>
        <CardContent>
          <Chip
            label={`Posted ${generateRandomNumber()} days ago`}
            variant="outlined"
          />
          <div className="info-container">
            <img src={data.logoUrl} alt="logo" className="company-logo" />
            <div className="info">
              <h4 className="company-name">{data.companyName}</h4>
              <h4>{capitalizeWords(data.jobRole)}</h4>
              <h5>{capitalizeWords(data.location)}</h5>
            </div>
          </div>
          <h4 className="salary">
            Estimated Salary: ₹ {data.minJdSalary || 0}{" "}
            {data.maxJdSalary && "-"} {data.maxJdSalary} LPA
          </h4>
          <div className="about-container">
            <h3 style={{ fontWeight: "normal", margin: 0 }}>About Company</h3>
            <h3 style={{ fontWeight: 600, margin: 0 }}>About us</h3>
            <p className="company-desc">{data.jobDetailsFromCompany}</p>
            <h4 className="company-desc-view-more">View job</h4>
          </div>
          <div className="exp-container">
            <h3 className="exp-title">Minimum Experience</h3>
            <h3 className="exp-val">{data.minExp || 0} years</h3>
          </div>
          <Button className="btn-apply" href={data.jdLink} target="_blank">⚡ Easy Apply</Button>
          <Button className="btn-refer" href={data.jdLink} target="_blank">
            <Avatar
                        sx={{ width: 26, height: 26 }}
                        alt="Remy Sharp"
                        src={'https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group(1).png'}
                        
            />
            <Avatar
                        sx={{ width: 26, height: 26 }}
                        alt="Remy Sharp"
                        src={'https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group(1).png'}
                        
            />
            Unlock referral asks
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default JobCard;
