import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1631784434195-6bd379472b5a";
  const COLD_URL =
    "https://images.unsplash.com/photo-1575365872518-1f378590b6b7";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1748333855736-9933b1fd0097";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
              ? HOT_URL
              : COLD_URL
          }
        />
        <CardContent>
          <Typography variant="h5">
            {info.city}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>

          <Typography variant="body2">
            <p>Temperature: {info.temp}°C</p>
            <p>Min Temp: {info.tempMin}°C</p>
            <p>Max Temp: {info.tempMax}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>
              Weather: <i>{info.weather}</i>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
