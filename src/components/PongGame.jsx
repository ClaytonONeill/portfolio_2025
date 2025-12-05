import React, { useState, useEffect, useRef } from "react";

function PongGame({ darkMode }) {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState({ player: 0, ai: 0 });

  // NEW: winner state + side flash states
  const [winner, setWinner] = useState(null); // "player" | "ai" | null
  const [flashLeft, setFlashLeft] = useState(false);
  const [flashRight, setFlashRight] = useState(false);

  const FLASH_DURATION = 150;
  const WIN_SCORE = 10;

  const gameStateRef = useRef({
    ball: { x: 400, y: 200, dx: 4, dy: 4, radius: 8 },
    player: { x: 20, y: 150, width: 12, height: 80, speed: 6 },
    ai: { x: 768, y: 150, width: 12, height: 80, speed: 4 },
    canvasWidth: 800,
    canvasHeight: 400,
    keys: {},
    touchY: null,
    animationId: null,
  });

  // Flash helper
  const triggerFlash = (side) => {
    if (side === "left") {
      setFlashLeft(true);
      setTimeout(() => setFlashLeft(false), FLASH_DURATION);
    } else {
      setFlashRight(true);
      setTimeout(() => setFlashRight(false), FLASH_DURATION);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const state = gameStateRef.current;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        state.keys[e.key] = true;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        state.keys[e.key] = false;
      }
    };

    const handleTouchStart = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      state.touchY = touch.clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      state.touchY = touch.clientY - rect.top;
    };

    const handleTouchEnd = () => {
      state.touchY = null;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      state.touchY = Math.max(
        state.player.height / 2,
        Math.min(state.canvasHeight - state.player.height / 2, mouseY)
      );
    };

    const handleMouseLeave = () => {
      state.touchY = null;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      const s = gameStateRef.current;
      if (s.animationId) {
        cancelAnimationFrame(s.animationId);
        s.animationId = null;
      }
    };
  }, []);

  const resetBall = () => {
    const state = gameStateRef.current;
    const baseSpeed = 5;

    state.ball.x = state.canvasWidth / 2;
    state.ball.y = state.canvasHeight / 2;

    const angle = ((Math.random() - 0.5) * Math.PI) / 3;

    state.ball.dx =
      (Math.random() > 0.5 ? 1 : -1) * baseSpeed * Math.cos(angle);
    state.ball.dy = baseSpeed * Math.sin(angle);
  };

  const drawStaticFrame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const state = gameStateRef.current;

    ctx.fillStyle = darkMode ? "#111827" : "#ffffff";
    ctx.fillRect(0, 0, state.canvasWidth, state.canvasHeight);

    ctx.strokeStyle = darkMode ? "#4b5563" : "#d1d5db";
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(state.canvasWidth / 2, 0);
    ctx.lineTo(state.canvasWidth / 2, state.canvasHeight);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = darkMode ? "#9ca3af" : "#6b7280";
    ctx.fillRect(
      state.player.x,
      state.player.y,
      state.player.width,
      state.player.height
    );
    ctx.fillRect(state.ai.x, state.ai.y, state.ai.width, state.ai.height);

    ctx.fillStyle = darkMode ? "#ffffff" : "#111827";
    ctx.beginPath();
    ctx.arc(state.ball.x, state.ball.y, state.ball.radius, 0, Math.PI * 2);
    ctx.fill();
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const state = gameStateRef.current;

    // stop game if winner exists
    if (winner) return;

    ctx.fillStyle = darkMode ? "#111827" : "#ffffff";
    ctx.fillRect(0, 0, state.canvasWidth, state.canvasHeight);

    // Flash overlays
    if (flashLeft) {
      ctx.fillStyle = "rgba(255,0,0,0.35)";
      ctx.fillRect(0, 0, state.canvasWidth / 2, state.canvasHeight);
    }
    if (flashRight) {
      ctx.fillStyle = "rgba(255,0,0,0.35)";
      ctx.fillRect(
        state.canvasWidth / 2,
        0,
        state.canvasWidth / 2,
        state.canvasHeight
      );
    }

    // Center dashed line
    ctx.strokeStyle = darkMode ? "#4b5563" : "#d1d5db";
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(state.canvasWidth / 2, 0);
    ctx.lineTo(state.canvasWidth / 2, state.canvasHeight);
    ctx.stroke();
    ctx.setLineDash([]);

    // Player movement
    if (state.touchY !== null) {
      const targetY = state.touchY - state.player.height / 2;
      state.player.y = Math.max(
        0,
        Math.min(state.canvasHeight - state.player.height, targetY)
      );
    } else {
      if (state.keys["ArrowUp"]) state.player.y -= state.player.speed;
      if (state.keys["ArrowDown"]) state.player.y += state.player.speed;
      state.player.y = Math.max(
        0,
        Math.min(state.canvasHeight - state.player.height, state.player.y)
      );
    }

    // AI movement
    const aiCenter = state.ai.y + state.ai.height / 2;
    const ballCenter = state.ball.y;
    if (ballCenter < aiCenter - 10) state.ai.y -= state.ai.speed;
    else if (ballCenter > aiCenter + 10) state.ai.y += state.ai.speed;
    state.ai.y = Math.max(
      0,
      Math.min(state.canvasHeight - state.ai.height, state.ai.y)
    );

    // Ball movement
    state.ball.x += state.ball.dx;
    state.ball.y += state.ball.dy;

    // Walls
    if (
      state.ball.y - state.ball.radius <= 0 ||
      state.ball.y + state.ball.radius >= state.canvasHeight
    ) {
      state.ball.dy *= -1;
    }

    // Player collision
    if (
      state.ball.x - state.ball.radius <= state.player.x + state.player.width &&
      state.ball.x >= state.player.x &&
      state.ball.y >= state.player.y &&
      state.ball.y <= state.player.y + state.player.height
    ) {
      state.ball.dx = Math.abs(state.ball.dx);
      const hitPos =
        (state.ball.y - (state.player.y + state.player.height / 2)) /
        (state.player.height / 2);
      state.ball.dy = hitPos * 5;
    }

    // AI collision
    if (
      state.ball.x + state.ball.radius >= state.ai.x &&
      state.ball.x <= state.ai.x + state.ai.width &&
      state.ball.y >= state.ai.y &&
      state.ball.y <= state.ai.y + state.ai.height
    ) {
      state.ball.dx = -Math.abs(state.ball.dx);
      const hitPos =
        (state.ball.y - (state.ai.y + state.ai.height / 2)) /
        (state.ai.height / 2);
      state.ball.dy = hitPos * 5;
    }

    // Scoring + WIN LOGIC + FLASH
    if (state.ball.x < 0) {
      triggerFlash("left");
      setScore((s) => {
        const newScore = { ...s, ai: s.ai + 1 };
        if (newScore.ai >= WIN_SCORE) {
          setWinner("ai");
          setGameStarted(false);
        }
        return newScore;
      });
      resetBall();
    } else if (state.ball.x > state.canvasWidth) {
      triggerFlash("right");
      setScore((s) => {
        const newScore = { ...s, player: s.player + 1 };
        if (newScore.player >= WIN_SCORE) {
          setWinner("player");
          setGameStarted(false);
        }
        return newScore;
      });
      resetBall();
    }

    // Draw paddles
    ctx.fillStyle = darkMode ? "#9ca3af" : "#6b7280";
    ctx.fillRect(
      state.player.x,
      state.player.y,
      state.player.width,
      state.player.height
    );
    ctx.fillRect(state.ai.x, state.ai.y, state.ai.width, state.ai.height);

    // Ball
    ctx.fillStyle = darkMode ? "#ffffff" : "#111827";
    ctx.beginPath();
    ctx.arc(state.ball.x, state.ball.y, state.ball.radius, 0, Math.PI * 2);
    ctx.fill();

    // Speed increase
    const speedIncreaseFactor = 1.002;
    state.ball.dx *= speedIncreaseFactor;
    state.ball.dy *= speedIncreaseFactor;

    if (gameStarted) {
      state.animationId = requestAnimationFrame(gameLoop);
    }
  };

  const startGame = () => {
    if (winner) return; // do not restart during win screen
    const state = gameStateRef.current;
    if (state.animationId) cancelAnimationFrame(state.animationId);
    resetBall();
    setGameStarted(true);
  };

  const resetGame = () => {
    const state = gameStateRef.current;
    if (state.animationId) cancelAnimationFrame(state.animationId);

    setGameStarted(false);
    setWinner(null);
    setScore({ player: 0, ai: 0 });

    state.player.y = (state.canvasHeight - state.player.height) / 2;
    state.ai.y = (state.canvasHeight - state.ai.height) / 2;

    state.ball.x = state.canvasWidth / 2;
    state.ball.y = state.canvasHeight / 2;
    state.ball.dx = 0;
    state.ball.dy = 0;

    drawStaticFrame();
  };

  useEffect(() => {
    if (gameStarted) gameLoop();
    else {
      const state = gameStateRef.current;
      if (state.animationId) {
        cancelAnimationFrame(state.animationId);
        state.animationId = null;
      }
    }
  }, [gameStarted, darkMode, winner]);

  useEffect(() => {
    const state = gameStateRef.current;
    state.player.y = (state.canvasHeight - state.player.height) / 2;
    state.ai.y = (state.canvasHeight - state.ai.height) / 2;
    state.ball.x = state.canvasWidth / 2;
    state.ball.y = state.canvasHeight / 2;
    state.ball.dx = 0;
    state.ball.dy = 0;
    drawStaticFrame();
  }, []);

  return (
    <div
      className={`border rounded-lg p-8 mb-8 ${
        darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-gray-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl font-bold">
          {score.player} : {score.ai}
        </div>

        <div className="relative">
          {/* Winner Overlay */}
          {winner && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10 rounded-lg">
              <p className="text-white text-4xl font-bold">
                {winner === "player" ? "YOU WIN!" : "YOU LOSE!"}
              </p>
            </div>
          )}

          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className={`border-2 rounded-lg max-w-full h-auto touch-none ${
              darkMode ? "border-gray-600" : "border-gray-400"
            }`}
            style={{ cursor: "none" }}
          />
        </div>

        <div className="flex flex-col items-center mt-4">
          <p className="text-lg font-semibold mb-2">
            {winner
              ? "Game Over!"
              : gameStarted
              ? "Use arrow keys, mouse, or touch to move!"
              : "Take a pong break!"}
          </p>

          <div className="flex gap-4 mt-2">
            {!gameStarted && !winner ? (
              <button
                onClick={startGame}
                className="px-6 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition-colors font-medium"
              >
                Start
              </button>
            ) : (
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-red-400 text-gray-900 rounded hover:bg-red-500 transition-colors font-medium"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PongGame;
