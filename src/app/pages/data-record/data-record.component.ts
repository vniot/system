import { Component, OnInit } from '@angular/core';

interface OperationData {
  hoist: number;
  lTravel: number;
  trolley: number;
}

interface ErrorRecord {
  date: string;
  event: string;
  content: string;
}

@Component({
  selector: 'app-data-record',
  templateUrl: './data-record.component.html',
  styleUrls: ['./data-record.component.scss']
})
export class DataRecordComponent implements OnInit {
  // Operation Data
  runningTimeTotal: OperationData = {
    hoist: 3500,
    lTravel: 3000,
    trolley: 3500
  };

  maintenanceDueDate: OperationData = {
    hoist: 170,
    lTravel: 190,
    trolley: 100
  };

  pushPulseCount: OperationData = {
    hoist: 22,
    lTravel: 22,
    trolley: 45
  };

  backtrackingCount: OperationData = {
    hoist: 45,
    lTravel: 45,
    trolley: 12
  };

  reversalCount: OperationData = {
    hoist: 12,
    lTravel: 12,
    trolley: 23
  };

  alarmCount: OperationData = {
    hoist: 12,
    lTravel: 12,
    trolley: 23
  };

  brakingLifetimeRemain: OperationData = {
    hoist: 1900,
    lTravel: 12,
    trolley: 23
  };

  brakingTimeTotal: OperationData = {
    hoist: 2300,
    lTravel: 23,
    trolley: 13
  };

  brakingReplacementCount: OperationData = {
    hoist: 3,
    lTravel: 2,
    trolley: 2
  };

  // Error History
  errorHistory: ErrorRecord[] = [
    { date: '13/02/2023 07:11', event: '03', content: 'Reset overload hoist' },
    { date: '13/02/2023 08:57', event: '03', content: 'Host overload' },
    { date: '10/02/2023 19:00', event: '01', content: 'Reset overhead' },
    { date: '10/02/2023 11:30', event: '01', content: 'Overhead braking' },
    { date: '10/01/2023 12:09', event: '12', content: 'Warning braking life' },
    { date: '03/01/2023 18:06', event: '12', content: 'Warning braking life' },
    { date: '10/11/2022 10:02', event: '01', content: 'Reset overhead' },
    { date: '09/10/2022 12:09', event: '12', content: 'Warning braking life' },
    { date: '03/09/2022 11:06', event: '12', content: 'Warning braking life' },
    { date: '03/08/2022 13:02', event: '01', content: 'Reset overhead' },
    { date: '03/08/2022 15:02', event: '01', content: 'Reset overhead' }
  ];

  private webSocket: WebSocket | null = null;

  constructor() { }

  ngOnInit(): void {
    const token = this.getToken();
    if (token) {
      console.log('Token retrieved: ', token);
      this.initWebSocket(token);
    } else {
      console.log('No token found');
    }
  }

  getToken(): string | null {
    return window.localStorage.getItem('auth-token');
  }

  initWebSocket(token: string): void {
    const entityId = "a6f3a720-ef76-11ef-8e00-e370a74757c3";
    this.webSocket = new WebSocket("wss://demo.thingsboard.io/api/ws");

    this.webSocket.onopen = () => {
      const authMessage = {
        authCmd: {
          cmdId: 0,
          token: token
        },
        cmds: [
          {
            entityType: "DEVICE",
            entityId: entityId,
            scope: "LATEST_TELEMETRY",
            cmdId: 10,
            type: "TIMESERIES"
          }
        ]
      };
      this.webSocket?.send(JSON.stringify(authMessage));
      console.log("WebSocket connection established, message sent: ", authMessage);
    };

    this.webSocket.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);
      this.processWebSocketData(event.data);
    };

    this.webSocket.onclose = () => {
      console.warn("WebSocket connection closed.");
    };
  }

  processWebSocketData(data: string): void {
    try {
      const parsedData = JSON.parse(data);
      console.log("Parsed WebSocket Data:", parsedData);

      if (parsedData.data) {
        const telemetryData = parsedData.data;

        // Cập nhật Running time Total
       
          this.runningTimeTotal = {
            hoist: Number(telemetryData.runTime1?.[0]?.["1"]) || this.runningTimeTotal.hoist,
            lTravel: Number(telemetryData.runTime2?.[0]?.["1"]) || this.runningTimeTotal.lTravel,
            trolley: Number(telemetryData.runTime3?.[0]?.["1"]) || this.runningTimeTotal.trolley
          };
        

        // Cập nhật Maintenance due date
        
          this.maintenanceDueDate = {
            hoist: Number(1000 - telemetryData.runTime1?.[0]?.["1"]) || this.maintenanceDueDate.hoist,
            lTravel: Number(1000 - telemetryData.runTime2?.[0]?.["1"]) || this.maintenanceDueDate.lTravel,
            trolley: Number(1000 - telemetryData.runTime3?.[0]?.["1"]) || this.maintenanceDueDate.trolley
          };
        

        // Cập nhật Push Pulse count
       
          this.pushPulseCount = {
            hoist: Number(telemetryData.pushpulseCount1?.[0]?.["1"]) || this.pushPulseCount.hoist,
            lTravel: Number(telemetryData.pushpulseCount2?.[0]?.["1"]) || this.pushPulseCount.lTravel,
            trolley: Number(telemetryData.pushpulseCount3?.[0]?.["1"]) || this.pushPulseCount.trolley
          };
        

        // Cập nhật Backtracking count
        if (telemetryData.backtrackingCount) {
          this.backtrackingCount = {
            hoist: Number(telemetryData.backtrackingCount.hoist?.[0]?.["1"]) || this.backtrackingCount.hoist,
            lTravel: Number(telemetryData.backtrackingCount.lTravel?.[0]?.["1"]) || this.backtrackingCount.lTravel,
            trolley: Number(telemetryData.backtrackingCount.trolley?.[0]?.["1"]) || this.backtrackingCount.trolley
          };
        }

        // Cập nhật Reversal count
        
          this.reversalCount = {
            hoist: Number(telemetryData.reversalCount1?.[0]?.["1"]) || this.reversalCount.hoist,
            lTravel: Number(telemetryData.reversalCount2?.[0]?.["1"]) || this.reversalCount.lTravel,
            trolley: Number(telemetryData.reversalCount3?.[0]?.["1"]) || this.reversalCount.trolley
          };
        

        // Cập nhật Alarm Count
      
          this.alarmCount = {
            hoist: Number(telemetryData.alarmCount1?.[0]?.["1"]) || this.alarmCount.hoist,
            lTravel: Number(telemetryData.alarmCount2?.[0]?.["1"]) || this.alarmCount.lTravel,
            trolley: Number(telemetryData.alarmCount3?.[0]?.["1"]) || this.alarmCount.trolley
          };
        

        // Cập nhật Braking lifetime remain
        if (telemetryData.brakingLifetimeRemain) {
          this.brakingLifetimeRemain = {
            hoist: Number(telemetryData.brakingLifetimeRemain.hoist?.[0]?.["1"]) || this.brakingLifetimeRemain.hoist,
            lTravel: Number(telemetryData.brakingLifetimeRemain.lTravel?.[0]?.["1"]) || this.brakingLifetimeRemain.lTravel,
            trolley: Number(telemetryData.brakingLifetimeRemain.trolley?.[0]?.["1"]) || this.brakingLifetimeRemain.trolley
          };
        }

        // Cập nhật Braking time total
        
          this.brakingTimeTotal = {
            hoist: Number(telemetryData.brakeTime1?.[0]?.["1"]) || this.brakingTimeTotal.hoist,
            lTravel: Number(telemetryData.brakeTime2?.[0]?.["1"]) || this.brakingTimeTotal.lTravel,
            trolley: Number(telemetryData.brakeTime3?.[0]?.["1"]) || this.brakingTimeTotal.trolley
          };
        

        // Cập nhật Braking replacement count
       
          this.brakingReplacementCount = {
            hoist: Number(1000-telemetryData.brakeTime1?.[0]?.["1"]) || this.brakingReplacementCount.hoist,
            lTravel: Number(1000-telemetryData.brakeTime2?.[0]?.["1"]) || this.brakingReplacementCount.lTravel,
            trolley: Number(1000-telemetryData.brakeTime3?.[0]?.["1"]) || this.brakingReplacementCount.trolley
          };
        

        // Cập nhật Error History nếu có
        if (telemetryData.errorHistory && Array.isArray(telemetryData.errorHistory)) {
          const newErrors = telemetryData.errorHistory.map((error: any) => ({
            date: error.date?.[0]?.["1"] || '',
            event: error.event?.[0]?.["1"] || '',
            content: error.content?.[0]?.["1"] || ''
          }));
          if (newErrors.length > 0) {
            this.errorHistory = newErrors;
          }
        }

        console.log("Updated Component Data:", {
          runningTimeTotal: this.runningTimeTotal,
          maintenanceDueDate: this.maintenanceDueDate,
          pushPulseCount: this.pushPulseCount,
          backtrackingCount: this.backtrackingCount,
          reversalCount: this.reversalCount,
          alarmCount: this.alarmCount,
          brakingLifetimeRemain: this.brakingLifetimeRemain,
          brakingTimeTotal: this.brakingTimeTotal,
          brakingReplacementCount: this.brakingReplacementCount,
          errorHistory: this.errorHistory
        });
      }
    } catch (error) {
      console.error("Error processing WebSocket data:", error);
    }
  }

  clearHistory(): void {
    this.errorHistory = [];
  }

  resetData(): void {
    this.runningTimeTotal = { hoist: 0, lTravel: 0, trolley: 0 };
    this.maintenanceDueDate = { hoist: 0, lTravel: 0, trolley: 0 };
    this.pushPulseCount = { hoist: 0, lTravel: 0, trolley: 0 };
    this.backtrackingCount = { hoist: 0, lTravel: 0, trolley: 0 };
    this.reversalCount = { hoist: 0, lTravel: 0, trolley: 0 };
    this.alarmCount = { hoist: 0, lTravel: 0, trolley: 0 };
    this.brakingLifetimeRemain = { hoist: 0, lTravel: 0, trolley: 0 };
    this.brakingTimeTotal = { hoist: 0, lTravel: 0, trolley: 0 };
    this.brakingReplacementCount = { hoist: 0, lTravel: 0, trolley: 0 };
  }

  exportFile(): void {
    console.log('Exporting data to file...');
  }
} 