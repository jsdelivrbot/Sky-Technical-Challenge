import Data from '../Data';

export default (req, res) => {

    // Extract location ID from parameters
    const locationID = req.params.locationID;

    // Filter channels by the provided location and always include national channels
    const locationProduct = Data.reduce( (acc, curr) =>
        acc.concat({
            id: curr.id,
            category: curr.category,
            channels: curr.channels.filter(channel =>
                        channel.location === locationID || channel.location === 'NATIONAL')}
        ), []);

    // Return product channels
    res.status(200).json(locationProduct);

};