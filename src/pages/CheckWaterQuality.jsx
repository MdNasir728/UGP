import DataInput from "@/components/DataInput";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";

const CheckWaterQuality = () => {
  const [color, setColor] = useState(0);
  const [aluminium, setAluminium] = useState(0);
  const [magnesium, setMagnesium] = useState(0);
  const [turbidity, setTurbidity] = useState(0);
  const [chloride, setChloride] = useState(0);
  const [calcium, setCalcium] = useState(0);
  const [pH, setPH] = useState(0);
  const [iron, setIron] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [conductivity, setConductivity] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [nitrate, setNitrate] = useState(0);
  const [TDS, setTDS] = useState(0);
  const [sulphate, setSulphate] = useState(0);
  const [phosphate, setPhosphate] = useState(0);
  const [totalHardness, setTH] = useState(0);
  const [zinc, setZinc] = useState(0);
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      color,
      aluminium,
      magnesium,
      turbidity,
      chloride,
      calcium,
      pH,
      iron,
      potassium,
      conductivity,
      sodium,
      nitrate,
      TDS,
      sulphate,
      phosphate,
      totalHardness,
      zinc,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/predict",
        data
      );
      setResult(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#0e1117] h-full">
      <div className="flex flex-col justify-center p-8 gap-4">
        <h3 className="font-semibold text-5xl mt-16 mb-8">
          Predict Water Quality
        </h3>
        <p className="font-medium text-lg">
          Enter these values of the parameters to know if the water quality is
          suitable to drink or not.
        </p>
        <div className="w-full h-[2px] bg-gray-500 " />
        <div className="grid grid-cols-3 gap-4">
          <DataInput label="Colour (TCU)" value={color} setter={setColor} />
          <DataInput
            label="Aluminium (mg/l)"
            value={aluminium}
            setter={setAluminium}
          />
          <DataInput
            label="Magnesium (mg/l)"
            value={magnesium}
            setter={setMagnesium}
          />
          <DataInput
            label="Turbidity (NTU)"
            value={turbidity}
            setter={setTurbidity}
          />
          <DataInput
            label="Chloride (mg/l)"
            value={chloride}
            setter={setChloride}
          />
          <DataInput
            label="Calcium (mg/l)"
            value={calcium}
            setter={setCalcium}
          />
          <DataInput label="pH" value={pH} setter={setPH} />
          <DataInput label="Iron (mg/l)" value={iron} setter={setIron} />
          <DataInput
            label="Potassium (mg/l)"
            value={potassium}
            setter={setPotassium}
          />
          <DataInput
            label="Conductivity (uS/cm)"
            value={conductivity}
            setter={setConductivity}
          />
          <DataInput label="Sodium (mg/l)" value={sodium} setter={setSodium} />
          <DataInput
            label="Nitrate (mg/l)"
            value={nitrate}
            setter={setNitrate}
          />
          <DataInput
            label="Total Dissolved Solids (mg/l)"
            value={TDS}
            setter={setTDS}
          />
          <DataInput
            label="Sulphate (mg/l)"
            value={sulphate}
            setter={setSulphate}
          />
          <DataInput
            label="Phosphate (mg/l)"
            value={phosphate}
            setter={setPhosphate}
          />
          <DataInput
            label="Total Hardness (mg/l as CaCO3)"
            value={totalHardness}
            setter={setTH}
          />
          <DataInput label="Zinc (mg/l)" value={zinc} setter={setZinc} />
          <Button
            onClick={handleClick}
            type="submit"
            className="w-[calc(100%-1rem)] m-2 my-10 gradient font-bold text-lg shadow-gray-400 hover:opacity-75"
            disabled={isLoading}
          >
            Submit
          </Button>
        </div>
        <div className="w-full p-4 flex flex-col justify-center items-center">
          {isLoading && (
            <h1 className="text-3xl ">
              <img src="/src/assets/loader.svg" alt="" />
            </h1>
          )}

          {result && result?.success ? (
            <h1 className="text-2xl font-bold bg-green-800 rounded-xl p-6">
              {result.success}
            </h1>
          ) : (
            <h1 className="text-2xl font-bold bg-red-400 rounded-xl p-6">
              {result.error}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckWaterQuality;
