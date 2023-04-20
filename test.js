import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LatestVideo() {
  // 유튜브 API로부터 받아온 동영상 목록을 담을 상태
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // 유튜브 API로부터 동영상 목록을 가져올 함수
    const fetchVideos = async () => {
      try {
        // API 요청에 필요한 데이터
        const apiKey = 'YOUR_API_KEY';
        const playlistId = 'YOUR_PLAYLIST_ID';
        const maxResults = 10;

        // API 요청
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId={UCXHaChrER0XYPrR43S7mx5A}&maxResults=50&key={AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8}`);

        // API 응답 결과에서 동영상 정보만 추출하여 저장
        const videosData = response.data.items.map(item => item.snippet);

        // 동영상 정보 중 업로드 날짜가 최신인 동영상을 찾아 저장
        let latestVideo = null;
        videosData.forEach(video => {
          if (!latestVideo || video.publishedAt > latestVideo.publishedAt) {
            latestVideo = video;
          }
        });

        // 최신 동영상 정보를 상태에 저장
        setVideos([latestVideo]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  // 최신 동영상 정보를 화면에 표시하는 JSX
  const latestVideoJSX = (
    <div>
      <h2>{videos[0].title}</h2>
      <p>{videos[0].description}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videos[0].resourceId.videoId}`}
        title={videos[0].title}
        allowFullScreen
      />
    </div>
  );

  return (
    <div>
      {videos.length > 0 ? latestVideoJSX : 'Loading...'}
    </div>
  );
}

export default LatestVideo;
