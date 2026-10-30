import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get('live')
    @HttpCode(HttpStatus.OK)
      getlivness() {
        return {
            status: 'alive',
            timestamp: new Date().toISOString(),
        };
        
      }

    @Get('read')
    @HttpCode(HttpStatus.OK)
      getreadiness() {
        return {
            status: 'ready',
            database: "not_connected_yet",
            timestamp: new Date().toISOString(),
        };
      }
    }
