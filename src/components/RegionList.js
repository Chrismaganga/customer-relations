import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegionList = () => {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regions.data);
  const error = useSelector((state) => state.regions.error);

  useEffect(() => {
    // Trigger the fetchRegions saga
    dispatch({ type: 'regions/fetchRegions' });
  }, [dispatch]);

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      {regions.map((region) => (
        <Text key={region.id}>{region.name}</Text>
      ))}
    </View>
  );
};

export default RegionList;
