
const ToyDetails = ({props}) => {
    const {toy}=props;
    return (
        <div>
            <h2>Toy Details</h2>
            <div>
                <img src={toy.selllerName} alt="" />
            </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
};

export default ToyDetails;