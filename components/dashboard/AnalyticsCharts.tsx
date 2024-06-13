//Must be a client component in order for chart component to work
'use client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import data from '@/data/analytics';

const AnalyticsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics for this Year</CardTitle>
        <CardDescription>Views per month</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Inline styles is recomended for the responsive chart, see their docs */}
        <div style={{ width: '100%', height: 399 }}>
          <ResponsiveContainer>
            <LineChart width={1100} height={300} data={data}>
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <CartesianGrid stroke='#ccc' />
              <XAxis dataKey='name' />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart;
