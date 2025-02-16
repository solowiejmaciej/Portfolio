import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download, RefreshCcw, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const StatsView = () => {
  const [stats, setStats] = useState({
    downloads: 0,
    lastUpdated: null,
  });

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/downloads");
      const data = await response.json();
      setStats({
        downloads: data.downloads,
        lastUpdated: new Date(data.lastUpdated).toLocaleDateString("pl-PL", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchStats}
            className="gap-2"
          >
            <RefreshCcw className="h-4 w-4" />
            Odśwież
          </Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Download className="h-4 w-4" />
          <span>Pobrania CV</span>
        </div>
        <div className="text-3xl font-bold">{stats.downloads}</div>
        <p className="text-sm text-muted-foreground mt-1">
          Łączna liczba pobrań dokumentu
        </p>
      </Card>
      <p className="text-sm text-center text-muted-foreground">
        Ostatnia aktualizacja: {stats.lastUpdated || "Ładowanie..."}
      </p>
    </div>
  );
};

export default StatsView;
