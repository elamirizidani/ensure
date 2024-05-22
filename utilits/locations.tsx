import axios from 'axios';

const API_KEY = 'AIzaSyCOSBQQQLcFDNJx303-4A3emrCk1Rn1z2w';


const geocodeAddress = async (address) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`
    );
    if (response.data.results.length > 0) {
      // response.data.address_components.map(item=>console.log(item))
      // console.log(response.data.address_components)
      return response.data.results.map(result => result.formatted_address);
    }
    throw new Error('No results found');
  } catch (error) {
    console.error('Error geocoding address:', error);
    throw error;
  }
};

export default geocodeAddress;


