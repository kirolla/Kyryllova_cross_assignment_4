import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import { COLORS, TYPOGRAPHY, FONT_WEIGHT } from '../constants';

export default function StatisticsScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Статистика</Text>
        <View style={styles.placeholder} />
      </View>

      <Card style={styles.card}>
        <Text style={styles.statLabel}>Середня тривалість циклу</Text>
        <Text style={styles.statValue}>28 днів</Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.statLabel}>Наступні місячні</Text>
        <Text style={styles.statDate}>28 квітня 2026</Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.historyTitle}>Історія циклів</Text>
        <View style={styles.historyList}>
          <Text style={styles.historyItem}>-  Січень 2026 – 29 днів</Text>
          <Text style={styles.historyItem}>-  Лютий 2026 – 27 днів</Text>
          <Text style={styles.historyItem}>-  Березень 2026 – 28 днів</Text>
          <Text style={styles.historyItem}>-  Квітень 2026 – 30 днів</Text>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 16, paddingTop: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  backButton: { padding: 4 },
  backArrow: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, color: COLORS.black },
  title: { fontSize: TYPOGRAPHY.title, fontWeight: FONT_WEIGHT.bold, color: COLORS.textPrimary, textAlign: 'center', flex: 1 },
  placeholder: { width: 30 },
  card: { borderWidth: 1, borderColor: '#FCE4EC', backgroundColor: COLORS.white },
  statLabel: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, color: COLORS.textSecondary, textAlign: 'center', marginBottom: 8 },
  statValue: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, color: COLORS.primary, textAlign: 'center', marginBottom: 12 },
  statDate: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, color: COLORS.primary, textAlign: 'center' },
  historyTitle: { fontSize: 16, fontWeight: FONT_WEIGHT.bold, color: COLORS.textSecondary, textAlign: 'center', marginBottom: 16 },
  historyList: { alignItems: 'flex-start' },
  historyItem: { fontSize: 14, fontWeight: FONT_WEIGHT.bold, color: COLORS.textSecondary, marginBottom: 8, textAlign: 'left' },
});