const FeatureCard = ({jobs}) => {
      const {logo,job_title}= jobs;

    return (
        <div>
             <img src={logo} alt="" />
            <h1>{job_title}</h1>
        </div>
    );
};

export default FeatureCard;