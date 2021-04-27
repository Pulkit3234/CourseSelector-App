import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

const Pdf = () => (
	<PDFViewer>
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text>Section #1</Text>
				</View>
				<View style={styles.section}>
					<Text>this is a great pdf</Text>
				</View>
			</Page>
		</Document>
	</PDFViewer>
);

export default Pdf;
